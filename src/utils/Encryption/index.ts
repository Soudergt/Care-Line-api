import * as config from "config";
import {
  createCipher,
  createDecipher,
  HexBase64BinaryEncoding,
  Utf8AsciiBinaryEncoding
} from "crypto";

export class Encryption {
  private fileEncryptionKey: string;
  private fileEncryptionAlgorithm: string;
  private plaintextFormat: Utf8AsciiBinaryEncoding = "utf8";
  private encryptedFormat: HexBase64BinaryEncoding = "hex";

  constructor() {
    this.fileEncryptionKey = config.get("encryption.key");
    this.fileEncryptionAlgorithm = config.get(
      "encryption.algorithm"
    );
  }

  public encrypt(data: string) {
    const cipher = createCipher(
      this.fileEncryptionAlgorithm,
      this.fileEncryptionKey
    );

    let crypted = cipher.update(
      data,
      this.plaintextFormat,
      this.encryptedFormat
    );

    crypted += cipher.final(this.encryptedFormat);

    return crypted;
  }

  public decrypt(data: string) {
    let decipher: any;
    let decrypted: any;

    try {
      decipher = createDecipher(
        this.fileEncryptionAlgorithm,
        this.fileEncryptionKey
      );

      decrypted = decipher.update(
        data,
        this.encryptedFormat,
        this.plaintextFormat
      );

      decrypted += decipher.final(this.plaintextFormat);
    } catch (e) {
      /*
      * These were included as we were encrypting stuff with either weak keys or
      * we committed keys to our git. These will allow old files to be
      * decrypted while maintaing security moving forward. - Sorry :(
      */
      try {
        decipher = createDecipher(this.fileEncryptionAlgorithm, "TylerKey");
        decrypted = decipher.update(
          data,
          this.encryptedFormat,
          this.plaintextFormat
        );
        decrypted += decipher.final(this.plaintextFormat);
      } catch (e) {
        try {
          decipher = createDecipher(
            this.fileEncryptionAlgorithm,
            ",]M~pZkdyBW=1r_erFJ!{[M)92l;t*ivn>u5i;i=BM|+z@aF5go-}-i6J(wf8J"
          );
          decrypted = decipher.update(
            data,
            this.encryptedFormat,
            this.plaintextFormat
          );
          decrypted += decipher.final(this.plaintextFormat);
        } catch (e) {
          return null;
        }
      }
    }

    return decrypted;
  }
}