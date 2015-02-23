using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    /// <summary>
    /// Service endpoint which performs basic math calculations.
    /// </summary>
    [ServiceContract]
    public interface ICalculatorService
    {
        /// <summary>
        /// Sum the two numbers.
        /// </summary>
        /// <param name="left">The left value</param>
        /// <param name="right">The right value</param>
        /// <returns>The result of summing the left and right values.</returns>
        [OperationContract]
        int sum(int left, int right);

        /// <summary>
        /// Multiplies the two numbers.
        /// </summary>
        /// <param name="left">The left value.</param>
        /// <param name="right">The right value.</param>
        /// <returns>The result of multiplying the two numbers.</returns>
        [OperationContract]
        int multiply(int left, int right);

        /// <summary>
        /// Subtracts the right number from the left.
        /// </summary>
        /// <param name="left">The left number.</param>
        /// <param name="right">The right number.</param>
        /// <returns>The result of subtracting right from left.</returns>
        [OperationContract]
        int subtract(int left, int right);

        /// <summary>
        /// Dividies the left number by the right number.
        /// </summary>
        /// <param name="left">The left number.</param>
        /// <param name="right">The right number.</param>
        /// <returns>The result of dividing the left number by the right number.</returns>
        [OperationContract]
        int divide(int left, int right);
    }
}
