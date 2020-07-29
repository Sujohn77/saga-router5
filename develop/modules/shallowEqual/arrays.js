/**
 * Created by kyckyc on 11/21/19.
 */

/**
 *
 * @param arrA
 * @param arrB
 * @return {boolean}
 */
export const shallowEqualArrays = (arrA, arrB) => {
    if (arrA === arrB) {
        return true;
    }

    if (!arrA || !arrB) {
        return false;
    }

    let len = arrA.length;

    if (arrB.length !== len) {
        return false;
    }

    for (let i = 0; i < len; i++) {
        if (arrA[i] !== arrB[i]) {
            return false;
        }
    }

    return true;
};
