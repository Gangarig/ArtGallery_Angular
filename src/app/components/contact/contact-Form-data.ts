export class contactFormData {
  constructor(name: string, message: string, formName: string = "example-form") {
    this.name = name;
    this.message = message;
    this["contact"] = formName
  }

  name: string;
  email?: string;
  message: string;
  "contact": string;
}
