import fitz
import sys

sys.stdout.reconfigure(encoding="utf-8")

def extract_text(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""

    for page in doc:
        text += page.get_text()

    doc.close()
    return text


if __name__ == "__main__":
    pdf_path = sys.argv[1]
    extracted_text = extract_text(pdf_path)

    print(extracted_text)