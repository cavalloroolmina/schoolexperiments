function findLongestConsecutiveChars(str: string): number {
    if (!str || str.length === 0) return 0;

    let maxLen = 1;
    let currentChar = str[0];
    let prevIndex = 0;

    for (let index = 1; index < str.length; index++) {
        if (currentChar === str[index]) {
            currentChar++;
        } else {
            currentChar = str[index];
            maxLen = Math.max(maxLen, prevIndex + index - prevIndex);
            prevIndex = index;
        }
    }

    return Math.max(maxLen, prevIndex + index - prevIndex) || 0;
}
