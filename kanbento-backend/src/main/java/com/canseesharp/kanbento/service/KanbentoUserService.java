package com.canseesharp.kanbento.service;

import com.canseesharp.kanbento.dto.KanbentoUserDto;
import com.canseesharp.kanbento.entity.KanbentoUser;

public interface KanbentoUserService {

    KanbentoUserDto getUserByUsername(String username);
}
