using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    /// <summary>
    /// Implementation of the temperature conversion service.
    /// </summary>
    public class TemperatureConverterService : ITemperatureConverterService
    {
        /// <summary>
        /// Given a temperature in fahrenheit, return the result of converting
        /// it to celsius.
        /// </summary>
        /// <param name="fahrenheit">A temperture in fahrenheit.</param>
        /// <returns>The result of converting the temperature to celcius.</returns>
        public double celsius(double fahrenheit)
        {
            return (fahrenheit - 32.0) * (5.0 / 9.0);
        }

        /// <summary>
        /// Given a temperature in celsius, return the result of converting
        /// it to fahrenheit.
        /// </summary>
        /// <param name="celsius">A temperature in celsius.</param>
        /// <returns>The result of converting the temperature to fahrenheit.</returns>
        public double fahrenheit(double celsius)
        {
            return ((9.0 / 5.0) * celsius) + 32.0;
        }
    }
}
