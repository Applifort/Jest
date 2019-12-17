import _ from 'lodash';

export default (coll = [], ...values) => {
    const set = new Set(values);
    return coll.filter((element) => !set.has(element));
};

