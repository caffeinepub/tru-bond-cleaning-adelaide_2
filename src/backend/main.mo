import Array "mo:core/Array";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Random "mo:core/Random";
import Text "mo:core/Text";

actor {
  // Data structure for a contact submission
  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    serviceType : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(cs1 : ContactSubmission, cs2 : ContactSubmission) : Order.Order {
      Nat.compare(cs1.id, cs2.id);
    };
  };

  let submissions = Map.empty<Nat, ContactSubmission>();

  public func submitContactForm(
    name : Text,
    email : Text,
    phone : Text,
    serviceType : Text,
    message : Text,
  ) : async () {
    let random = Random.crypto();
    let id = await* random.natRange(0, 10_000_000);
    let submission : ContactSubmission = {
      id;
      name;
      email;
      phone;
      serviceType;
      message;
      timestamp = Time.now();
    };
    submissions.add(id, submission);
  };

  public query func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort();
  };
};
