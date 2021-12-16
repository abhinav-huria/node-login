module.exports = function(req, res, next)
{

  if(req.session.is_logged_in )
  {
    res.redirect("/")

  }
  else{
    res.redirect("/")
  }
}