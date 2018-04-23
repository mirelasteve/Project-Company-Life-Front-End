export class AppConfig {
  public readonly apiUrl: string;
  // tslint:disable-next-line:variable-name
  public readonly jwt_issuer: string;

  constructor() {
      this.apiUrl = 'http://localhost:3001/api';
      this.jwt_issuer = 'telerik';
  }
}
