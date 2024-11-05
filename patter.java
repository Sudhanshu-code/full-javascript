public class patter {
    public static void main(String[] args) {
        int row = 6;

        int print = 1;
        for (int i = row; i >= 0; i--) {

            for (int j = 1; j <= row - i; j++) {
                System.out.print(" ");

            }

            for (int j = 0; j <= i - 1; j++) {
                if (print <= 9) {
                    System.out.print(print + " ");
                }

                if (print > 9) {
                    if (print % 2 == 0) {
                        System.out.print(0 + " ");
                    } else {
                        System.out.print(9 + " ");
                    }

                }
                print++;
            }
            System.out.println();

        }
        int printt = 21;

        for (int i = 0; i <= row; i++) {
            for (int j = 1; j <= row - i; j++) {
                System.out.print(" ");

            }

            for (int j = 0; j <= i - 1; j++) {
                if (printt <= 9) {
                    System.out.print(printt + " ");
                }

                if (printt > 9) {
                    if (printt % 2 == 0) {
                        System.out.print(0 + " ");
                    } else {
                        System.out.print(9 + " ");
                    }

                }
                printt--;
            }
            System.out.println();

        }
    }
}
