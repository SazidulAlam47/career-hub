const getStoredJobs = () => {
    const storedJobsString = localStorage.getItem('applied-jobs');
    if (storedJobsString) {
        return JSON.parse(storedJobsString);
    }
    return [];
}

const saveJobsToLS = applied => localStorage.setItem('applied-jobs', JSON.stringify(applied));

const addToLS = id => {
    const applied = getStoredJobs();
    const exists = applied.find((jobId) => jobId == id);
    if (!exists) {
        applied.push(id);
        // save to local storage
        saveJobsToLS(applied);
        return true;
    }
    return false;

}

const removeFromLS = id => {
    const cart = getStoredJobs();
    // removing every id
    const remaining = cart.filter(idx => idx != id);
    saveJobsToLS(remaining);
}

export { addToLS, getStoredJobs, removeFromLS }