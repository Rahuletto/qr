import segno


url=input("Enter a url to generate QR: ")
escaped = url


if("http" in url):
    escaped = url.replace("https://", "").replace("http://", "").replace("www.", "").split('.')[0]
else:
    escaped = url

print("\nGenenrating QR...")
qrcode = segno.make_qr(url)

qrcode.save(
   "{}.png".format(escaped),
   scale=15,
)

print("Generated QR code ! Saved as {}.png".format(escaped))
