export class contactFormData {
  constructor(name: string, message: string, formName: string = "example-form") {
    this.name = name;
    this.message = message;
    this["form-name"] = formName
  }

  name: string;
  email?: string;
  message: string;
  "form-name": string;
}
