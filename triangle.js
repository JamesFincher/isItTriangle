function isTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) //triangle inequality theorem states the first two sides in sum must be equal or greater then the third....
        return false;
    else
        return true
}