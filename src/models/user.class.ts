export class User {
    firstName: any;
    lastName: any;
    birthDate: number;
    street: any;
    zipCode: number;
    city: any;


    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';

    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        };
    }
}