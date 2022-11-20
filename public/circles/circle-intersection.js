(function(circleIntersection) {
    "use strict";
    const SMALL = 1e-10;

    /** Returns the intersection area of a bunch of circles (where each circle
     is an object having an x,y and radius property) */
    circleIntersection.intersectionArea = function(circles) {
        // get all the intersection points of the circles
        const intersectionPoints = circleIntersection.getIntersectionPoints(circles);
        console.log(intersectionPoints)

        // filter out points that aren't included in all the circles
        const innerPoints = intersectionPoints.filter(function (p) {
            return circleIntersection.containedInCircles(p, circles);
        });

        let arcArea = 0, polygonArea = 0, i;

        console.log(innerPoints)
        // if we have intersection points that are within all the circles,
        // then figure out the area contained by them
        if (innerPoints.length > 1) {
            // sort the points by angle from the center of the polygon, which lets
            // us just iterate over points to get the edges
            const center = circleIntersection.getCenter(innerPoints);
            for (i = 0; i < innerPoints.length; ++i ) {
                const p = innerPoints[i];
                p.angle = Math.atan2(p.x - center.x, p.y - center.y);
            }
            innerPoints.sort(function(a,b) { return b.angle - a.angle;});

            // iterate over all points, get arc between the points
            // and update the areas
            let p2 = innerPoints[innerPoints.length - 1];
            for (i = 0; i < innerPoints.length; ++i) {
                const p1 = innerPoints[i];

                // polygon area updates easily ...
                polygonArea += (p2.x + p1.x) * (p1.y - p2.y);

                // updating the arc area is a little more involved
                let midPoint = {
                        x: (p1.x + p2.x) / 2,
                        y: (p1.y + p2.y) / 2
                    },
                    arc = null;

                for (let j = 0; j < p1.parentIndex.length; ++j) {
                    if (p2.parentIndex.indexOf(p1.parentIndex[j]) > -1) {
                        // figure out the angle halfway between the two points
                        // on the current circle
                        const circle = circles[p1.parentIndex[j]],
                            a1 = Math.atan2(p1.x - circle.x, p1.y - circle.y),
                            a2 = Math.atan2(p2.x - circle.x, p2.y - circle.y);
                        console.log('a1: ' + a1)
                        console.log('a2: ' + a2)


                        let angleDiff = (a2 - a1);
                        if (angleDiff < 0) {
                            angleDiff += 2*Math.PI;
                        }
                        console.log('angleDiff: ' + angleDiff)

                        // and use that angle to figure out the width of the
                        // arc
                        const a = a2 - angleDiff / 2,
                            width = circleIntersection.distance(midPoint, {
                                x: circle.x + circle.radius * Math.sin(a),
                                y: circle.y + circle.radius * Math.cos(a)
                            });
                        console.log('midPoint: ' + midPoint.x + ',' + midPoint.y)
                        console.log('a: ' + a)
                        console.log('width: ' + width)

                        // pick the circle whose arc has the smallest width
                        if ((arc === null) || (arc.width > width)) {
                            arc = { circle : circle,
                                width : width,
                                p1 : p1,
                                p2 : p2};
                        }
                        console.log(arc)
                    }
                }
                arcArea += circleIntersection.circleArea(arc.circle.radius, arc.width);
                p2 = p1;
            }
        } else {
            // no intersection points, is either disjoint - or is completely
            // overlapped. figure out which by examining the smallest circle
            let smallest = circles[0];
            for (i = 1; i < circles.length; ++i) {
                if (circles[i].radius < smallest.radius) {
                    smallest = circles[i];
                }
            }

            // make sure the smallest circle is completely contained in all
            // the other circles
            let disjoint = false;
            for (i = 0; i < circles.length; ++i) {
                if (circleIntersection.distance(circles[i], smallest) > Math.abs(smallest.radius - circles[i].radius)) {
                    disjoint = true;
                    break;
                }
            }

            if (disjoint) {
                arcArea = polygonArea = 0;
            } else {
                arcArea = smallest.radius * smallest.radius * Math.PI;
            }
        }

        console.log('arcArea: ' + arcArea)
        console.log('polygonArea: ' + polygonArea)
        polygonArea /= 2;

        return arcArea + polygonArea;
    };

    /** returns whether a point is contained by all of a list of circles */
    circleIntersection.containedInCircles = function(point, circles) {
        for (let i = 0; i < circles.length; ++i) {
            if (circleIntersection.distance(point, circles[i]) > circles[i].radius + SMALL) {
                return false;
            }
        }
        return true;
    };

    /** Gets all intersection points between a bunch of circles */
    circleIntersection.getIntersectionPoints = function(circles) {
        const ret = [];
        for (let i = 0; i < circles.length; ++i) {
            for (let j = i + 1; j < circles.length; ++j) {
                const intersect = circleIntersection.circleCircleIntersection(circles[i],
                    circles[j]);
                for (let k = 0; k < intersect.length; ++k) {
                    const p = intersect[k];
                    p.parentIndex = [i,j];
                    ret.push(p);
                }
            }
        }
        return ret;
    }

    circleIntersection.circleIntegral = function(r, x) {
        const y = Math.sqrt(r * r - x * x);
        return x * y + r * r * Math.atan2(x, y);
    };

    /** Returns the area of a circle of radius r - up to width */
    circleIntersection.circleArea = function(r, width) {
        return circleIntersection.circleIntegral(r, width - r) - circleIntersection.circleIntegral(r, -r);
    };


    /** euclidean distance between two points */
    circleIntersection.distance = function(p1, p2) {
        return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) +
            (p1.y - p2.y) * (p1.y - p2.y));
    };

    /** Given two circles (containing a x/y/radius attributes),
     returns the intersecting points if possible.
     note: doesn't handle cases where there are infinitely many
     intersection poiints (circles are equivalent):, or only one intersection point*/
    circleIntersection.circleCircleIntersection = function(p1, p2) {
        const d = circleIntersection.distance(p1, p2),
            r1 = p1.radius,
            r2 = p2.radius;

        // if to far away, or self-contained - can't be done
        if ((d >= (r1 + r2)) || (d <= Math.abs(r1 - r2))) {
            return [];
        }

        const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d),
            h = Math.sqrt(r1 * r1 - a * a),
            x0 = p1.x + a * (p2.x - p1.x) / d,
            y0 = p1.y + a * (p2.y - p1.y) / d,
            rx = -(p2.y - p1.y) * (h / d),
            ry = -(p2.x - p1.x) * (h / d);

        return [{ x: x0 + rx, y : y0 - ry },
            { x: x0 - rx, y : y0 + ry }];
    };

    /** Returns the center of a bunch of points */
    circleIntersection.getCenter = function(points) {
        const center = {x: 0, y: 0};
        for (let i =0; i < points.length; ++i ) {
            center.x += points[i].x;
            center.y += points[i].y;
        }
        center.x /= points.length;
        center.y /= points.length;
        return center;
    };
}(window.circleIntersection = window.circleIntersection || {}));
