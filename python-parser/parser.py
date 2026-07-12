import fitz
import sys

def extract_text(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        text = ""

        for page in doc:
            text += page.get_text()

        doc.close()
        return text

    except Exception as e:
        return f"Error: {e}"


if __name__ == "__main__":
    pdf_path = sys.argv[1]
    extracted_text = extract_text(pdf_path)
    print(extracted_text)