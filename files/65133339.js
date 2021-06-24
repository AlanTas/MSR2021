const filters = {
  lastHourFilter: (result) => result.postedDate > Date.now() - ms('1 hour'),
  last24HoursFilter: (result) => result.postedDate > Date.now() - ms('24 hours'),
  ...
  itContractorFilter: generateSpecialismFilter('IT Contractor'),
  clinicalPsychologyFilter: generateSpecialismFilter('Clinical Psychology'),
  ...
  fullTimeFilter: generateJobTypeFilter('Full Time'),
  temporaryFilter: generateJobTypeFilter('Temporary')
}
