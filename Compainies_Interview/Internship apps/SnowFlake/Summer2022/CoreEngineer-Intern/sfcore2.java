public class MyClass {

    public static int phoneCalls(List<Integer> start, List<Integer> duration, List<Integer> volume) {
        int n = volume.size();
        int[] endTime = new int[n];
        int[] startTime = new int[n];
        int[] profit = new int[n];
        for (int i = 0; i < n; i++) {
            endTime[i] = start.get(i) + duration.get(i);
            startTime[i] = start.get(i);
            profit[i] = volume.get(i);
        }
        int[][] jobs = new int[n][3];
        for (int i = 0; i < n; i++) {
            jobs[i] = new int[] { startTime[i], endTime[i], profit[i] };
        }
        Arrays.sort(jobs, (a, b) -> a[1] - b[1]);
        TreeMap<Integer, Integer> dp = new TreeMap<>();
        dp.put(0, 0);
        for (int[] job : jobs) {
            int cur = dp.floorEntry(job[0]).getValue() + job[2];
            if (cur > dp.lastEntry().getValue())
                dp.put(job[1], cur);
        }
        return dp.lastEntry().getValue();
    }

    public static void main(String args[]) {
        List<Integer> start = new ArrayList<Integer>();
        start.add(1);
        start.add(10);
        start.add(100);
        List<Integer> duration = new ArrayList<Integer>();
        duration.add(1);
        duration.add(10);
        duration.add(100);
        List<Integer> volume = new ArrayList<Integer>();
        volume.add(1);
        volume.add(10);
        volume.add(100);

        System.out.println(phoneCalls(start, duration, volume));
    }
}