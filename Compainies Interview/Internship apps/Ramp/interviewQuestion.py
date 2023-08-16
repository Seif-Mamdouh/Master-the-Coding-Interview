#Declare orig dictionary
orig = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
        'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

#Method encode to encode messages


def encode(encode_key, message):
  #Declare to store the encoded message
  en = ""
  #Convert the key to list
  key = list(encode_key)
  #Create dictionary with orig as key and encode key as value
  encode_dictionary = dict(zip(orig, key))
  #Get the letters from message
  words = [x for x in message]
  #Encode the message with key
  for i in words:
    if i not in encode_dictionary:
      en += i
    else:
      en += encode_dictionary[i]
  #Return the encoded_message
  return en

#Decode method
#same as encode method


def decode(decode_key, message):
  de = ""
  key = list(decode_key)
  #Create dictionary decode_dictionary
  #Store decode key as key and orig as value
  decode_dictionary = dict(zip(key, orig))
  words = [x for x in message]
  for i in words:
    if i not in decode_dictionary:
      de += i
    else:
      de += decode_dictionary[i]
  return de


#Main method
if __name__ == "__main__":
  #Get the user choice

  print("Enter E to encode a message.")
  print("Enter D to decode a message.")
  while(1):
    choice = input("Enter your choice: ")
    if(choice.upper() != 'E' and choice.upper() != 'D'):
      print("Error: You must enter E or D")
      continue
    #If encode call encode method
    if(choice.upper() == 'E'):
      while(1):
        encode_key = input("Enter name of the file that has the code: ")
        #To test block code
        try:
          file = open(encode_key, "r")
          key = file.readline()
          file.close()
        #To handle exceptions
        except:
          print("Error: that file does not exist")
          continue
        encode_message = input("Enter the message you want to encode: ")
        en = encode(key, encode_message)
        print("Encoded message: ", en)

        #Write into file
        f = open("secret.txt", "w")
        f.write(en)
        f.close()
        print("Encoded message has been saved in secret.txt")
        break
      break

    #If decode call decode method
    elif(choice.upper() == 'D'):
      while(1):
        decode_key = input("Enter name of the file that has the code: ")
        #To test block code
        try:
          file1 = open(decode_key, "r")
          key = file1.readline()
          file1.close()
          break
        #To handle error
        except:
          print("Error: that file does not exist")
          continue
      while(1):
        decode_message = input("Enter the message you want to decode: ")
        #To test block code
        try:
          file2 = open(decode_message, "r")
          message = file2.readline()
          print("Encoded message: ", message)
        #To handle error
        except:
          print("Error: that file does not exist")
          continue
        en = decode(key, message)
        print("Decoded message: ", en)
        break
      break
