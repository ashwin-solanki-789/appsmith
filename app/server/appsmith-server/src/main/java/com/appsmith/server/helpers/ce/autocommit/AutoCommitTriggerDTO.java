package com.appsmith.server.helpers.ce.autocommit;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class AutoCommitTriggerDTO {

    private Boolean isAutoCommitRequired;

    private Boolean isClientAutoCommitRequired;

    private Boolean isServerAutoCommitRequired;
}
