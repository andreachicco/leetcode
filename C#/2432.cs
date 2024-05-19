public class Solution {
    public int HardestWorker(int n, int[][] logs) {
        int maxId = -1;
        
        int prevTime = 0;
        int maxTime = 0;

        foreach (int[] log in logs) {
            var curId = log[0];
            var curTime = log[1];
            
            int workTime = curTime - prevTime;

            if(workTime > maxTime) {
                maxTime = workTime;
                maxId = curId;
            }

            if(workTime == maxTime) {
                if(maxId != -1 && curId < maxId) maxId = curId;
            }

            prevTime = curTime;
        }

        return maxId;
    }
}