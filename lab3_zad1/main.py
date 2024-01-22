import base64
def code_to(text):
    text = text.encode()
    code = base64.b64encode(text)
    code = code.decode()
    return code


string ="alamakota"
print(code_to(string))
