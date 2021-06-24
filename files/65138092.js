function GetReferrals(member_id) {
  return knex.select('member_id').from('users').where({referred_by: 
  member_id}).then((referrals) => {
    const referralIds = referrals.map(element => element.member_id)
    return Promise.all(referralIds.map(GetReferrals)).then(referralsReferrals => {
      return referralsReferrals.reduce((final, arr) => final.concat(arr), referralIds)
    })
  })
}

app.get('/api/calculateReferralTotals', (req, res) => {
    const member_id = req.body.member_id;
    GetReferrals(member_id).then(final_referral_list => {
      // do something with the global_referral_array
      res.status(200).send({final_referral_list})
    }).catch((error) => {
      console.log("Error in select " + error);
    })
});
