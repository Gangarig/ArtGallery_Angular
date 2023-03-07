export class contactFormData {
  constructor(name: string, message: string, formName: string = "contact-form") {
    this.name = name;
    this.message = message;
    this["contact-form"] = formName
  }

  name: string;
  email?: string;
  message: string;
  "contact-form": string;
}
