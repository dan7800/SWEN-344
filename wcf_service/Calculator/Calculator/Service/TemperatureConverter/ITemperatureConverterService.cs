using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;

namespace Calculator
{
    /// <summary>
    /// Service for converting temperatures to and from celsius and Fahrenheit.
    /// </summary>
    [ServiceContract]
    public interface ITemperatureConverterService
    {
        /// <summary>
        /// Given a temperature in fahrenheit, return the result of converting
        /// it to celsius.
        /// </summary>
        /// <param name="fahrenheit">A temperture in fahrenheit.</param>
        /// <returns>The result of converting the temperature to celsius.</returns>
        [OperationContract]
        double celsius(double fahrenheit);

        /// <summary>
        /// Given a temperature in celsius, return the result of converting
        /// it to fahrenheit.
        /// </summary>
        /// <param name="celsius">A temperature in celsius.</param>
        /// <returns>The result of converting the temperature to fahrenheit.</returns>
        [OperationContract]
        double fahrenheit(double celsius);
    }
}
