export type IFrameQueryParams = {
    typename: string, // 'opportunity'
    id: string, // 'f4257c9e-7969-ee11-9ae7-000d3a85d02d'
    type: string, // '3'
    orgname: string, // 'unq8d53d553da61ee11a382000d3a819'
    OrgLCID: string, // '1033' (org language id)
    UserLCID: string, // '1033' (user language id)
} & { [index: string]: any };

export type ParentQueryParams = {
    entityTypeName: string,
    id: string,
    nextStageId: string,
    pageType: string,
    parentrecordid: string,
    parentrecordname: string,
    parentrecordtype: string,
    processId: string,
    processInstanceId: string
} & { [index: string]: any }
