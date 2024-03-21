import math

def solution(fees, records):
    answer = []
    #d 차량총시간, 차량입차시간, 차량요금
    [std_min, std_price, unit_min, unit_price] = list(map(int, fees))
    
    total_entry = {}
    total_min = {}
    total_fee = {}
    
    #l records >> 차량시간
    for r in records:
        [cur_time, cur_car, cur_status] = r.split()
        [hour, min] = cur_time.split(":")
        cur_min = int(hour) * 60 + int(min)
        
        if cur_status == 'IN':
            total_entry[cur_car] = cur_min
        else:
            if not cur_car in total_min:
                total_min[cur_car] = 0
                
            total_min[cur_car] += cur_min - total_entry[cur_car]
            total_entry[cur_car] = -1
            
    for car in total_entry.keys():
        if total_entry[car] != -1:
            if not car in total_min:
                total_min[car] = 0
                
            total_min[car] += 24 * 60 - total_entry[car] - 1
            
    #o 차량 요금
    for car, m in total_min.items():
        if m <= std_min:
            total_fee[car] = std_price
        else:
            total_fee[car] = std_price + math.ceil((m - std_min)/unit_min) * unit_price
    
    #o 정렬
    return [total_fee[key] for key in sorted(total_fee.keys())]