from twilio.rest import Client

account_sid = 'ACd81e8a0ebcfda09296e2372d8c8b24ed'
auth_token = '421a6df42e59641e4560938f97ee1d7c'
twilio_phone_number = '+18886106113'
userPhoneNumber = '+5512369437'

client = Client(account_sid, auth_token)

def send_order(orderText):
    message = client.messages.create(
        body=orderText,
        from_=twilio_phone_number,
        to=userPhoneNumber
    )
    print(f"Order sent! Message SID: {message.sid}")

# Example usage
order = input("Enter your store order: ")
send_order(order)
