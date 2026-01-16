export const DEPARTMENTS = [
    'CS',
    'Math',
    'Science',
    'History',
    'Art',
    'Physical Education',

];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    label: dept,
    value: dept.toLowerCase().replace(/\s+/g, '_'),
}));