using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace WcfService1
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    
    public class Service1 : IService1
    {
        public int sum(int num1, int num2)
        {
            return num1 + num2;
        }

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

        public int Multiply(int num1, int num2)
        {
            return num1 * num2;
        }

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

        public float convertToFahrenheit(float celsius)
        {
            float fahrenheitConversionRatio = (float)(9.0 / 5.0);
            return (celsius * fahrenheitConversionRatio + 32);
        }

        public float convertToCelsius(float fahrenheit)
        {
            float celsiusConversionRatio = (float)(5.0 / 9.0);
            return ((fahrenheit - 32) * celsiusConversionRatio);
        }
    }
}
