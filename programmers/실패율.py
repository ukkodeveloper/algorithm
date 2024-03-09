def solution(N, stages):
    # stage 별 남아있는 인원 구한다.
    users_in_stage = [0] * (N + 1)
    
    for stage in stages:
        users_in_stage[stage - 1] += 1
    
    # 실패율 구하기
    fail_rates = {}
    remained_users = len(stages)
    
    for i in range(N):
        current_users = users_in_stage[i]
        
        if (current_users == 0 or remained_users == 0):
            fail_rates[i + 1] = 0
            continue
        
        fail_rates[i + 1] = current_users / remained_users
        
        remained_users -= current_users
        
    # 정렬하여 리턴
    result = sorted(fail_rates.keys(), key=lambda x: fail_rates[x], reverse=True)
        
    return result