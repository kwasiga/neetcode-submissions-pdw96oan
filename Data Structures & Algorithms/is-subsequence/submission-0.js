class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {

        let ps = 0;
        let pt = 0;

        const ns = s.length;
        const nt = t.length;

        while (ps <= ns && pt <= nt){
            if (s[ps] == t[pt]){
                ps++;
                pt++;
            }
            else{
                pt++
            }
        }
        return ps == ns + 1;
    }
}
