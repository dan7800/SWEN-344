using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace WcfServiceLibrary1
{
   // NOTE: You can use the "Rename" command on the "Refactor" menu to 
   // change the class name "Service1" in both code and config file 
   // together.

   public class Service1 :IService1
   {
      
      // This Function Returns summation of two integer numbers
      
      public int sum(int num1, int num2)
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

      public int celciusToFarhenheit(int cel)
      {
          return ((cel * 9) / 5) + 32;
      }

      public int farhenheitToCelcius(int farhen)
      {
          return ((farhen - 32) * 5) / 9;
      }
   }
}