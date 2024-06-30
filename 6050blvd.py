import csv
from datetime import datetime

def calculate_walmart_spending(file_path):
    total_spent = 0.0
    start_date = datetime(2024, 5, 19)
    end_date = datetime.now()

    with open(file_path, mode='r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            date = datetime.strptime(row['Date'], '%Y-%m-%d') 
            category = row['Category'] 
            cost_str = row['Cost'].strip()  

            if cost_str:  
                amount = float(cost_str)  
                if category.lower() in ['household supplies', 'general'] and start_date <= date <= end_date:
                    total_spent += amount

    return total_spent

if __name__ == "__main__":
    file_path = '/Users/seifmamdouh/Coding-Interview/6050-jfk-blvd-east_2024-06-30_export.csv'
    total_spent = calculate_walmart_spending(file_path)
    print(f"Total spent May 19, 2024, to now: ${total_spent:.2f}")
