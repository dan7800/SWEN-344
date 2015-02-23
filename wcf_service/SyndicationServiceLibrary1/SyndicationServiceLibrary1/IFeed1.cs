using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Syndication;
using System.ServiceModel.Web;
using System.Text;

namespace SyndicationServiceLibrary1
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
   }

   // Use a data contract as illustrated in the sample below to add 
   // composite types to service operations.

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
