import { User } from "./User";

export class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string | number,
    email: string,
    name: string,
    password: string,
    creditCard: string,
    purchaseTotal: |number 
  ) {
    super(id, email, name, password, purchaseTotal);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
    this.purchaseTotal = purchaseTotal
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
 
  public getPurchaseTotal(): number {
    return this.purchaseTotal
  }

  public getIntroduceYourself(): string | number {
    return this.introduceYourself
  }
}

const customer = new Customer(1,"roro@gmail.com","rodolfo","aloteste11","4567",12)
// customer.introduceYourself()