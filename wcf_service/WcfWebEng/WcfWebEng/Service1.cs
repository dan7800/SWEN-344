using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace WcfWebEng
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to 
   // change the class name "Service1" in both code and config file 
   // together.

   public class Service1 :IService1
   {
      
      // This Function Returns summation of two integer numbers
      
      public int Sum(int num1, int num2)
      {
         return num1 + num2;
      }
      
      // This function returns subtraction of two numbers. 
      // If num1 is smaller than number two then this function returns 0
      
      public int Subtract(int num1, int num2)
      {
         if (num1 > num2)
         {
            return num1 - num2;
         }
         else
         {
            return 0;
         }
      }
      
      // This function returns multiplication of two integer numbers.

      public int Multiply(int num1, int num2)
      {
         return num1 * num2;
      }
      
      // This function returns integer value of two integer number. 
      // If num2 is 0 then this function returns 1.

      public int Divide(int num1, int num2)
      {
         if (num2 != 0)
         {
            return (num1 / num2);
         }
         else
         {
            return 1;
         }
      }

      // This function returns input (degrees in fahrenheit)
      // converted to degrees celsius.

      public double ConvertToCelsius(double degreesFahrenheit)
      {
          // Deduct 32
          double degreesCelsius = degreesFahrenheit - 32;

          // Multiply by 5
          degreesCelsius = degreesCelsius * 5;

          // Divide by 9
          degreesCelsius = degreesCelsius / 9;

          return degreesCelsius;
      }

      // This function returns input (degrees in celsius)
      // converted to degrees fahrenheit.

      public double ConvertToFahrenheit(double degreesCelsius)
      {
          // Multiply by 9
          double degreesFahrenheit = degreesCelsius * 9;

          // Divide by 5
          degreesFahrenheit = degreesFahrenheit / 5;

          // Add 32
          degreesFahrenheit = degreesFahrenheit + 32;

          return degreesFahrenheit;
      }
   }
}
