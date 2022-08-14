import TreeView from "@mui/lab/TreeView"
import TreeItem from "@mui/lab/TreeItem"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { useSelector } from "react-redux"
import React from "react"

const Hierarchy = () => {

  const data = useSelector(state => state.data.value);
  let fetch = useSelector(state => state.data.isFetched)
  


  return (
    <div className="flex justify-center items-center w-full h-screen text-lg ">
      <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />} sx={{ marginTop: 1, justifyContent: "center", maxWidth: 500, height: 300, flexGrow: 1, overflow: "auto" }} aria-label={"Employee Hierarchy"} >
        {fetch && <>
          {
            data.filter(item => item.designation.includes("SVP")).map(svp => {
              return <TreeItem key={svp.id} nodeId={`${svp.id}`} label={`${svp.first_name} ${svp.last_name} : ${svp.designation}`} >
                {data.filter(item1 => item1.designation.includes("Academics")).map(academics => {
                  return <TreeItem key={academics.id} nodeId={`${academics.id}`} label={`${academics.first_name} ${academics.last_name} : ${academics.designation}`} >
                    {data.filter(item2 => item2.designation.includes("Director")).map(director => {
                      return <TreeItem key={director.id} nodeId={`${director.id}`} label={`${director.first_name} ${director.last_name} : ${director.designation}`} >
                        {data.filter(item3 => item3.designation.includes("Senior")).map(senior => {
                          return <TreeItem key={senior.id} nodeId={`${senior.id}`} label={`${senior.first_name} ${senior.last_name} : ${senior.designation}`} >
                            {data.filter(item4 => item4.designation.includes("Software")).map(software => {
                              return <TreeItem key={software.id} nodeId={`${software.id}`} label={`${software.first_name} ${software.last_name} : ${software.designation}`} >
                                {data.filter(item5 => item5.designation.includes("Retail")).map(retail => {
                                  return <TreeItem key={retail.id} nodeId={`${retail.id}`} label={`${retail.first_name} ${retail.last_name} : ${retail.designation}`} >

                                  </TreeItem>
                                })}
                              </TreeItem>
                            })}
                          </TreeItem>
                        })}
                      </TreeItem>
                    })}
                  </TreeItem>
                })}
              </TreeItem>
            })
          }
        </>}
      </TreeView>
    </div>
  )
}

export default React.memo(Hierarchy)