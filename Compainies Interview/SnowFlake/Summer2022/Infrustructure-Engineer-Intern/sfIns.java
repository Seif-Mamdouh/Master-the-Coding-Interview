import java.util.Scanner;

public class ClosestColor {


   public static void main(String[] args) {
      
       String pixels;
       Scanner kb = new Scanner(System.in);
      
       // read the 24-bit binary string for a pixel
       pixels = kb.next();
      
       // extract the red, green and blue components of the pixel
       String red = pixels.substring(0, 8); // [0-7] is Red
       String green = pixels.substring(8, 16); // [8-15] is Green
       String blue = pixels.substring(16); // [16-23] is Blue
      
       // initialize the values for the red, green and blue to 0
       int redValue = 0, greenValue = 0, blueValue = 0;
      
       // loop to compute the decimal values for red, 
       //green and blue components of the pixel
       for(int i=0;i<red.length();i++)
       {
           if(red.charAt(i) == '1')
               redValue += Math.pow(2, 7-i);
           if(green.charAt(i) == '1')
               greenValue += Math.pow(2, 7-i);
           if(blue.charAt(i) == '1')
               blueValue += Math.pow(2, 7-i);
       }
      
       // create arrays to store color names and distance from the pixel
       String[] colors = {"Black", "White", "Red", "Green", "Blue"};
       double[] distance = new double[colors.length];
      
       // loop over the colors
       for(int i=0;i<colors.length;i++) {
          
           // depending on the current color, compute and set the distance
           if(colors[i].equalsIgnoreCase("Black"))
               distance[i] = Math.sqrt(Math.pow(redValue,2) + Math.pow(greenValue, 2) + Math.pow(blueValue, 2));
           else if(colors[i].equalsIgnoreCase("White"))
               distance[i] = Math.sqrt(Math.pow(redValue-255,2) + Math.pow(greenValue-255, 2) + Math.pow(blueValue-255, 2));
           else if(colors[i].equalsIgnoreCase("Red"))
               distance[i] = Math.sqrt(Math.pow(redValue-255,2) + Math.pow(greenValue, 2) + Math.pow(blueValue, 2));
           else if(colors[i].equalsIgnoreCase("Green"))
               distance[i] = Math.sqrt(Math.pow(redValue,2) + Math.pow(greenValue-255, 2) + Math.pow(blueValue, 2));
           else  
               distance[i] = Math.sqrt(Math.pow(redValue,2) + Math.pow(greenValue, 2) + Math.pow(blueValue-255, 2));
       }
      
       // set closest color to "Black" and minDistance to distance of black color from pixel
       String closestColor = colors[0];
       double minDistance = distance[0];
      
       // loop over the colors to determine the closest color
       for(int i=1;i<colors.length;i++) {
           if(distance[i] < minDistance) // current distance is less than minDistance, update minDistance to ith distance and closestColor to ith color
           {
               minDistance = distance[i];
               closestColor = colors[i];
           }
           else if(distance[i] == minDistance) // current distance is equal to minDistance, update closestColor to "Ambiguous"
               closestColor = "Ambiguous";
       }
      
       // display the closest color
       System.out.println(closestColor);
   }
}


   public static void main(String[] args) {
       // Binary String......
       // Not that fun, but we must try
       String pixels;
       Scanner kb = new Scanner(System.in);

       // There's a 24-bit binary string for a pixel
       pixels = kb.next();

       // each color has spefic number set of numbers in the string in order to
       // Idenitify it's color. Does that make sense?
       String red = pixels.substring(0, 7); // red has numbers from [0-7]
       String green = pixels.substring(8, 15); // green has numbers from [8 - 15]
       String blue = pixels.substring(16 - 22); // blue has numbers from [16 - 22]

       // setting all colors to zero
       int redNumber = 0, blueNumber = 0, greenNumber = 0;

       // Now, since this is a binary string and we gotta create a for loop
       // Loop to find the decimal numbers for any of the three colors

       for (int i = 0; i < red.length(); i++) {
           if (red.charAt(i) == '1')
               redNumber += Math.pow(2, 7 - i);
           if (green.charAt(i) == '1')
               greenNumber += Math.pow(2, 7 - i);
           if (blue.charAt(i) == '1')
               blueNumber += Math.pow(2, 7 - i);
       }

       // Now we need to store all color names so the result can
       // be easily understoood by the user

       String[] colors = { "Black", "White", "Red", "Blue", "Green" };
       double[] distance = new double[colors.length];

       // loop over the colors
       for (int i = 0; i < colors.length; i++) {

           // depending on the current color, compute and set the distance
           if (colors[i].equalsIgnoreCase("Black"))
               distance[i] = Math.sqrt(Math.pow(redNumber, 2) + Math.pow(greenNumber, 2) + Math.pow(blueNumber, 2));
           else if (colors[i].equalsIgnoreCase("White"))
               distance[i] = Math.sqrt(
                       Math.pow(redNumber - 255, 2) + Math.pow(greenNumber - 255, 2) + Math.pow(blueNumber - 255, 2));
           else if (colors[i].equalsIgnoreCase("Red"))
               distance[i] = Math
                       .sqrt(Math.pow(redNumber - 255, 2) + Math.pow(greenNumber, 2) + Math.pow(blueNumber, 2));
           else if (colors[i].equalsIgnoreCase("Green"))
               distance[i] = Math
                       .sqrt(Math.pow(redNumber, 2) + Math.pow(greenNumber - 255, 2) + Math.pow(blueNumber, 2));
           else
               distance[i] = Math
                       .sqrt(Math.pow(redNumber, 2) + Math.pow(greenNumber, 2) + Math.pow(blueNumber = -255, 2));
       }

       // set closest color to "Black" and minDistance to distance of black color from
       // pixel
       String closestColor = colors[0];
       double minDistance = distance[0];

       // loop over the colors to determine the closest color
       for (int i = 1; i < colors.length; i++) {
           if (distance[i] < minDistance) // current distance is less than minDistance, update minDistance to ith
                                          // distance and closestColor to ith color
           {
               minDistance = distance[i];
               closestColor = colors[i];
           } else if (distance[i] == minDistance) // current distance is equal to minDistance, update closestColor to
                                                  // "Ambiguous"
               closestColor = "Ambiguous";
       }

       // display the closest color
       System.out.println(closestColor);

   }

}

