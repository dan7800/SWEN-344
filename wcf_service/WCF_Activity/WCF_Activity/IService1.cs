using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace WCF_Activity
{
 [ServiceContract]
   public interface IService1
   {
      [OperationContract]
      int sum(int num1, int num2);

      [OperationContract]
      int Subtract(int num1, int num2);

      [OperationContract]
      int Multiply(int num1, int num2);

      [OperationContract]
      int Divide(int num1, int num2);

     [OperationContract]
      double cToF(double temp);

     [OperationContract]
      double fToC(double temp);
   }

   [DataContract]
   public class CompositeType
   {
      bool boolValue = true;
      String stringValue = "Hello ";

      [DataMember]
      public bool BoolValue
      {
         get { return boolValue; }
         set { boolValue = value; }
      }

      [DataMember]   
      public string StringValue
      {
         get { return stringValue; }
         set { stringValue = value; }
      }
   }
}