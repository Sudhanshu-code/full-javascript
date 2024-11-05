/* print this star pattern
 
 *   
  *
   *
  *
 *
  *
   *
  *
 *
  *
   *
  *
 *
 
 */

public class star {

  public static void main(String[] args) {
    for (int i = 0; i < 20; i++) {
      for (int j = 0; j < 3; j++) {
        if (i == j || i % 2 == 1 && j == 1 || i % 4 == 0 && j == 0 || i % 4 == 2 && j == 2) {
          System.out.print(" * ");
        } else {
          System.out.print(" ");
        }
      }
      System.out.println();
    }

  }
}