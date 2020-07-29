/**
 * Created by kyckyc on 11/21/19.
 */

/**
 *
 * @param objA
 * @param objB
 * @param debug
 * @return {boolean}
 */
export const shallowEqualObjects = (objA, objB, debug = false) => {
    if (objA === objB) {
        return true;
    }

    if (!objA || !objB) {
        return false;
    }

    let aKeys = Object.keys(objA);
    let bKeys = Object.keys(objB);
    let len = aKeys.length;

    if (bKeys.length !== len) {
        return false;
    }

    for (let i = 0; i < len; i++) {
        let key = aKeys[i];

        if (objA[key] !== objB[key]) {
            if (debug) {
                console.debug(key);
            }
            return false;
        }
    }
    return true;
};
