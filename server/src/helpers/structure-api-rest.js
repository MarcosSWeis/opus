module.exports = {

    structureApiRestFindAll: (arrayData, errorStatusText, errorStatusCode) => {
        let ok;
        let status;
        let length = arrayData.length;
        if (length !== 0) {
            ok = true;
            status = 200;
            statusText = "OK";
        } else {
            ok = false;
            status = errorStatusCode;
            statusText = errorStatusText;
        }
        const response = {
            meta: {
                ok: ok,
                status: status,
                statusText: statusText,
                total: length,
                url: URL_API,
            },
            data: arrayData,
        };
        return response;
    },
};
