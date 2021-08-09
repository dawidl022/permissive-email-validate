const assert = require("assert");
const validateEmail = require("../index.js");


describe("positive validateEmail", function() {

  it("should pass with simple address", function() {
    let address = "simple@example.com";
    assert(validateEmail(address));
  });

  it("should pass with simple address with dot", function() {
    let address = "very.common@example.com";
    assert(validateEmail(address));
  })

  it("should pass with multiple dots and plus signs", function() {
    let addresses = [
        "disposable.style.email.with+symbol@example.com",
        "user.name+tag+sorting@example.com"
      ];
    addresses.forEach(function(address) {
      assert(validateEmail(address));
    });
  });

  it("should pass with hyphens", function() {
    let addresses = [
        "other.email-with-hyphen@example.com",
        "fully-qualified-domain@example.com"
      ];
    addresses.forEach(function(address) {
      assert(validateEmail(address));
    });
  });

  it("should pass with 1 letter local part", function() {
    let address = "x@example.com";
    assert(validateEmail(address));
  });

  it("should pass with 1 letter local and domain parts", function() {
    let address = "a@b";
    assert(validateEmail(address));
  });

  it("should pass with hyphens in domain", function() {
    let address = "example-indeed@strange-example.com";
    assert(validateEmail(address));
  })

  it("it should pass with slash in local part", function() {
    let address = "test/test@test.com";
    assert(validateEmail(address));
  })

  it("should pass with digit in TLD", function() {
    let address = "admin@mailserver1";
    assert(validateEmail(address));
  })

  it("should pass with single letter domain and longer TLD", function() {
    let address = "example@s.example";
    assert(validateEmail(address));
  })

  it("should pass with space in quoted local", function() {
    let address = '" "@example.org';
    assert(validateEmail(address));
  })

  it("should pass with consecutive dots in quoted local", function() {
    let address = '"john..doe"@example.org';
    assert(validateEmail(address));
  })

  it("should pass with bangified host route", function() {
    let address = "mailhost!username@example.org";
    assert(validateEmail(address));
  })

  it("should pass with escaped mail route", function() {
    let address =  "user%example.com@example.org";
    assert(validateEmail(address));
  })

  it("should pass with local part ending with non-alphanumeric character from" +
     " the list of allowed printable characters", function() {
    let address = "user-@example.org";
    assert(validateEmail(address));
  })

  it("should pass with domain as IPv4 address", function() {
    let address = "jsmith@[192.168.2.1]";
    assert(validateEmail(address));
  });

  it("should pass with domain as IPv6 address", function() {
    let address = "jsmith@[IPv6:2001:db8::1]";
    assert(validateEmail(address));
  });

  it("should allow comments in local part", function() {
    let address = "john(hello @(world!) )@example.com";
    assert(validateEmail(address));
  })

  it("should allow comments in domain part", function() {
    let addresses = [
      "john.smith@(comment)example.com",
      "john.smith@example.com(comment)"
    ];
    addresses.forEach(function(address) {
      assert(validateEmail(address));
    })
  })

});

describe("international validateEmail", function() {

  it("should pass with latin diacritics", function() {
    let address = "Pelé@example.com";
    assert(validateEmail(address));
  });

  it("should pass with greek alphabet", function() {
    let address = "δοκιμή@παράδειγμα.δοκιμή";
    assert(validateEmail(address));
  });

  it("should pass with chinese characters", function() {
    let address = "我買@屋企.香港";
    assert(validateEmail(address));
  });

  it("should pass with japanese characters", function() {
    let address = "二ノ宮@黒川.日本";
    assert(validateEmail(address))
  });

  it("should pass with cyrylic alphabet", function() {
    let address = "медведь@с-балалайкой.рф";
    assert(validateEmail(address));
  });

  it("should pass with devanagari characters", function() {
    let address = "संपर्क@डाटामेल.भारत";
    assert(validateEmail(address));
  });

})
