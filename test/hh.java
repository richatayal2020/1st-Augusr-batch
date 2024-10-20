import java.util.*;

public class hh{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Read input
        int N = scanner.nextInt();
        int[] arr = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = scanner.nextInt();
        }
        
        // Find the longest good subsequence
        int result = findLongestGoodSubsequence(arr);
        
        // Print the result
        System.out.println(result);
        
        scanner.close();
    }
    
    public static int findLongestGoodSubsequence(int[] arr) {
        int n = arr.length;
        int maxLength = 0;
        
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int len = j - i + 1;
                if (len % 2 == 0 && isGoodSubsequence(arr, i, j)) {
                    maxLength = Math.max(maxLength, len);
                }
            }
        }
        
        return maxLength;
    }
    
    public static boolean isGoodSubsequence(int[] arr, int start, int end) {
        int len = end - start + 1;
        int mid = start + len / 2;
        
        int firstHalf = arr[start];
        int secondHalf = arr[mid];
        
        for (int i = start; i < mid; i++) {
            if (arr[i] != firstHalf) {
                return false;
            }
        }
        
        for (int i = mid; i <= end; i++) {
            if (arr[i] != secondHalf) {
                return false;
            }
        }
        
        return firstHalf != secondHalf;
    }
}