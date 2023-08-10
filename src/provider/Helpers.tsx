export function formatCPF(cpf: string) {
  cpf = cpf.replace(/\D/g, ''); // remove non-digits
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // add dot after the third digit
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // add dot after the sixth digit
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // add hyphen before the last two digits
  return cpf;
}
export function formatPhoneNumber(phoneNumber: string) {
  phoneNumber = phoneNumber.replace(/\D/g, ''); // remove non-digits
  phoneNumber = phoneNumber.replace(/(\d{2})(\d)/, '($1) $2'); // add parentheses around the first two digits and a space
  phoneNumber = phoneNumber.replace(/(\d{5})(\d)/, '$1-$2'); // add a hyphen after the fifth digit
  return phoneNumber;
}
export function formatTelNumber(phoneNumber: string) {
  phoneNumber = phoneNumber.replace(/\D/g, ''); // remove non-digits
  phoneNumber = phoneNumber.replace(/(\d{2})(\d)/, '($1) $2'); // add parentheses around the first two digits and a space
  phoneNumber = phoneNumber.replace(/(\d{4})(\d)/, '$1-$2'); // add a hyphen after the fifth digit
  return phoneNumber;
}
export function formatBirthdate(birthdate: string) {
  birthdate = birthdate.replace(/\D/g, ''); // remove non-digits
  birthdate = birthdate.replace(/(\d{2})(\d)/, '$1/$2'); // add a slash after the second digit
  birthdate = birthdate.replace(/(\d{2})(\d)/, '$1/$2'); // add a slash after the fourth digit
  return birthdate;
}
export function formatCEP(cep: string) {
  cep = cep.replace(/\D/g, ''); // remove non-digits
  cep = cep.replace(/(\d{5})(\d)/, '$1-$2'); // add a hyphen after the fifth digit
  return cep;
}

