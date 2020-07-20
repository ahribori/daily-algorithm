/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  return address.replace(/[.]/g, '[.]');
};

defangIPaddr('1.1.1.1');
defangIPaddr('255.100.50.0');
