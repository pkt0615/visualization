const checklist = {
  Compute: {
    "1.1.1.1": {
      description:
        "일반적인 Image와 Public Image 경우를 나누어서 다음과 같은 지침을 따르는 것을 권장한다",
      security_grade: "not scored"
    },
    "1.1.1.2": {
      description: "EBS 스냅샷 여부",
      security_grade: "critical"
    },
    "1.1.1.3": {
      description: "EBS 볼륨의 암호화 여부",
      security_grade: "critical"
    },
    "1.1.1.4": {
      description:
        "웹서버 일 경우 0.0.0.0/0주소로부터 HTTP(80),HTTPS(443) 허용하되 특정포트 (22,3389등)에 대해 허용할 경우 특정 IP만 허용해야 한다",
      security_grade: "critical"
    },
    "1.1.1.5": {
      description:
        "데이터베이스 서버 일 경우 특정 IP 주소 또는 IP주소의 범위만 특정 포트(22,3389,1433,3306,5439등)에 대해 허용해야 한다",
      security_grade: "critical"
    },
    "1.1.1.6": {
      description:
        "Elastic IP를 해제하고 다른 인스턴스에 연결할 경우 기존 Elastic IP를 설정했던 인스턴스를 재기동하는 것을 권장한다",
      security_grade: "not scored"
    },
    "1.1.1.7": {
      description:
        "Placement Group을 설정하여 동일한 기반  하드웨어를 공유하지 않게 한다",
      security_grade: "not scored"
    },
    "1.1.1.8": {
      description: "계정 access key 유무",
      security_grade: "critical"
    },
    "1.1.2.1": {
      description:
        "지정된 그룹에 한해서 VM 액세스 권한권한 부여 여부(그룹 관리)",
      security_grade: "not scored"
    },
    "1.1.2.2": {
      description:
        "지정된 사용자에 한해서 VM액세스 및 설정 변경 권한 부여 여부(최소한의 권한)",
      security_grade: "not scored"
    },
    "1.1.2.3": {
      description: "디스크 암호화 전 스냅샷 또는 백업 여부",
      security_grade: "warning"
    },
    "1.1.2.4": {
      description: "OS 디스크(부팅 볼륨)가 암호화 여부",
      security_grade: "critical"
    },
    "1.1.2.5": {
      description: "데이터 디스크(부팅되지 않은 볼륨)가 암호화 여부",
      security_grade: "critical"
    },
    "1.1.2.6": {
      description: "구독에 연결되지 않은 디스크 암호화 여부",
      security_grade: "critical"
    },
    "1.1.2.7": {
      description: "암호화 키에 KEK사용 권장(key vault에 KEK추가)",
      security_grade: "warning"
    },
    "1.1.2.8": {
      description: "VM에는 조직의 승인된 확장 기능만 설치해야 한다 ",
      security_grade: "not scored"
    },
    "1.1.2.9": {
      description: "VM은 항상 최신의 OS로 패치하는 것을 권고",
      security_grade: "warning"
    },
    "1.1.2.10": {
      description: "VM에 endpoint protection 설치 권고 ",
      security_grade: "warning"
    },
    "1.1.2.11": {
      description:
        "“any” Source IP주소에서 관리포트(SSH, RDP)로 endpoint에 액세스를 허용 하는 경우 ",
      security_grade: "critical"
    },
    "1.1.2.12": {
      description: "JIT(Just In Time) VM Access 사용 여부 ",
      security_grade: "warning"
    }
  },
  Iam: {
    "2.1.1.1": {
      description: "모든 사용자에 대해 MFA 설정하는 것을 권장한다.",
      security_grade: "critical"
    },
    "2.1.1.2": {
      description: "root권한 위임 전용계정 사용을 권장한다.",
      security_grade: "critical"
    },
    "2.1.1.3": {
      description: "root 계정과 관련된 access key 제거하는 것을 권장한다.",
      security_grade: "critical"
    },
    "2.1.1.4": {
      description: "IAM정책 설정은 그룹을 사용하여 할당하는 것을 권장한다.",
      security_grade: "warning"
    },
    "2.1.1.5": {
      description:
        "특정 작업을 위한 권한이 필요할 경우 STS를 사용하여 임시권한을 부여하는 것을 권장한다",
      security_grade: "not scored"
    },
    "2.1.1.6": {
      description: "장기간(90일) 미사용 계정에 대한 관리하는 것을 권장한다.",
      security_grade: "warning"
    },
    "2.1.1.7": {
      description: "access key 재발급하는 것을 권장한다.",
      security_grade: "warning"
    },
    "2.1.1.8": {
      description: "사용자 패스워드 설정 관련",
      security_grade: "warning"
    }
  },
  Network: {
    "3.1.1.1": {
      description:
        "모든 security group은 출발지 ip가 0.0.0.0/0 이면서 목적지 port 가 22,3389로 설정되어 있으면 안된다.",
      security_grade: "critical"
    },
    "3.1.1.2": {
      description:
        "모든 security group은 출발지 ip가 0.0.0.0/0 이면서 목적지 port 가 22,3389로 설정되어 있으면 안된다.",
      security_grade: "critical"
    },
    "3.1.1.3": {
      description: "모든 VPC의 기본 보안 그룹이 모든 트레픽을 제한 여부.",
      security_grade: "critical"
    },
    "3.1.1.4": {
      description: "ELB에 보안 그룹 설정 유무",
      security_grade: "critical"
    },
    "3.1.1.5": {
      description:
        "모든ACL은 출발지 ip가 0.0.0.0/0 이면서 목적지 port 가 22,3389로 설정되어 있는 경우(Inbound)",
      security_grade: "critical"
    },
    "3.1.1.6": {
      description:
        "모든 ACL은 출발지 ip가 0.0.0.0/0 이면서 목적지 port 가 22,3389로 설정되어 있는 경우(Outbound)",
      security_grade: "critical"
    },
    "3.1.1.7": {
      description: "VPC Flow Log 활성화 여부 ",
      security_grade: "warning"
    },
    "3.1.1.8": {
      description: "VPC peering의 routing table이 최소한의 access 설정 여부",
      security_grade: "not scored"
    },
    "3.1.1.9": {
      description:
        "VPN(site to site) 터널의 상태, 터널 내 데이터, 터널 밖 데이터에 대해 확인해야 한다. ",
      security_grade: "critical"
    },
    "3.1.1.10": {
      description: "AWS Client VPN을 사용할 경우 사용자 최소화",
      security_grade: "not scored"
    },
    "3.1.1.11": {
      description:
        "AWS Direct Connect를 사용할 경우 IAM과 리소스 기반 정책 설정",
      security_grade: "not scored"
    },
    "3.1.1.12": {
      description: "AWS CloudFront를 사용할 경우 전송 중 데이터 암호화 여부",
      security_grade: "critical"
    },
    "3.1.1.13": {
      description: "AWS CloudFront를 사용할 경우 저장 데이터 암호화 여부",
      security_grade: "critical"
    },
    "3.1.1.14": {
      description: "AWS CloudFront를 사용할 경우 콘텐츠에 대한 액세스 제한",
      security_grade: "critical"
    },
    "3.1.1.15": {
      description: "AWS CloudFront를 사용할 경우 Access Logging 여부",
      security_grade: "critical"
    }
  },
  Storage: {
    "4.1.1.1": {
      description: "Version 관리가 되어있는지",
      security_grade: "critical"
    },
    "4.1.1.2": {
      description: "데이터 보관할 때 데이터 암호화 유무",
      security_grade: "critical"
    },
    "4.1.1.3": {
      description: "전송중인 데이터의 암호화 유무",
      security_grade: "critical"
    },
    "4.1.1.4": {
      description: "서버 access 로그를 모으고 있는지 유무",
      security_grade: "critical"
    },
    "4.1.1.5": {
      description: "스토리지 엑세스를 위한 VPC end-point 설정",
      security_grade: "warning"
    },
    "4.1.1.6": {
      description:
        "S3 bucket이 올바른 정책을 사용하고 공개적으로 access할 수 없는지 확인해야 한다",
      security_grade: "warning"
    },
    "4.1.1.7": {
      description:
        "S3 access 가 필요한 application 또는 service에 대한 IAM사용",
      security_grade: "warning"
    },
    "4.1.1.8": {
      description: "MFA 삭제 사용 여부",
      security_grade: "warning"
    }
  },
  Database: {
    "5.1.1.1": {
      description: "DB 인스턴스의 엔진이 오래된 엔진 버전인 경우",
      security_grade: "not scored"
    },
    "5.1.1.2": {
      description: "DB 인스턴스의 유지관리 작업이 보류중인 경우",
      security_grade: "warning"
    },
    "5.1.1.3": {
      description: "DB 인스턴스의 자동 백업이 비활성화된 경우",
      security_grade: "critical"
    },
    "5.1.1.4": {
      description:
        "RDS 스토리지 유형이 마그네틱인 경우 범용SSD 또는 프로비저닝된 IOPS 스토리지 사용을 권장한다.",
      security_grade: "not scored"
    },
    "5.1.1.5": {
      description:
        "RDS의 vpc의 inbound/outbound 정책이 출발지 ip가 0.0.0.0/0 이면서 목적지 port 가 20,21,22,1433,1434,3306,3389,4333,5432,5500로 설정이 되어있는 경우",
      security_grade: "critical"
    },
    "5.1.1.6": {
      description: "DB 인스턴스에 확장된 모니터링이 비활성화되어 있는 경우",
      security_grade: "critical"
    },
    "5.1.1.7": {
      description: "DB 인스턴스에 암호화가 비활성화되어 있는 경우",
      security_grade: "critical"
    },
    "5.1.1.8": {
      description: "RDS 리소스의 암호화 및 키를 별도로 관리해야 한다.",
      security_grade: "critical"
    },
    "5.1.1.9": {
      description: "DB 인스턴스의 전송중인 데이터의 암호화 유무",
      security_grade: "not scored"
    }
  }
};

user_checklist =
  "{'Network': [{'3.1.1.1': {'Data': [], 'Point': True}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-006393d2994f966bf'}, {'3.1.1.1': {'Data': [], 'Point': True}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-01144d8bd171d5382'}, {'3.1.1.1': {'Data': [], 'Point': True}, '3.1.1.2': {'Data': [], 'Point': True}, 'Id': 'sg-013b6bb678432c753'}, {'3.1.1.1': {'Data': [{'IPAddr': '*', 'Port': '', 'InDescription': '', 'Protocol': '-1'}], 'Point': False}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-015c5877afc8583d8'}, {'3.1.1.1': {'Data': [], 'Point': True}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-01a42e0659efcfbdc'}, {'3.1.1.1': {'Data': [], 'Point': True}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-0235a9d08810b1507'}, {'3.1.1.1': {'Data': [{'IPAddr': '*', 'Port': '', 'InDescription': '', 'Protocol': '-1'}], 'Point': False}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-02596c39f95615903'}, {'3.1.1.1': {'Data': [{'IPAddr': '*', 'Port': '', 'InDescription': '', 'Protocol': '-1'}], 'Point': False}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-0261003da26e9339e'}, {'3.1.1.1': {'Data': [{'IPAddr': '*', 'Port': '', 'InDescription': '', 'Protocol': '-1'}], 'Point': False}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-02b491ad5006805a6'}, {'3.1.1.1': {'Data': [], 'Point': True}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-053da0c30b3c9340f'}, {'3.1.1.1': {'Data': [], 'Point': True}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-055ece670df0b4fc9'}, {'3.1.1.1': {'Data': [], 'Point': True}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-08779b5512cc42fec'}, {'3.1.1.1': {'Data': [], 'Point': True}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-0b9b6a19e43f02563'}, {'3.1.1.1': {'Data': [], 'Point': True}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-0f5f275292cc61580'}, {'3.1.1.1': {'Data': [{'IPAddr': '*', 'Port': '', 'InDescription': '', 'Protocol': '-1'}], 'Point': False}, '3.1.1.2': {'Data': [{'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'Id': 'sg-92b0abfc'}], 'Compute': [{'1.1.1.4': {'Data': [{'IPAddr': '*', 'Port': 22, 'InDescription': '', 'Protocol': 'tcp'}, {'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'ID': 'i-0e825a076ae3c0a45'}], 'Iam': [[{'2.1.1.6': {'Data': {'CreatedTime': '2019-10-26 15:38:01'}, 'Point': True}, 'Id': 'AKIA4LMVGPP7VID7MVGU', '2.1.1.5': {'Data': {'LastAccessTime': '2019-11-18 15:38:00'}, 'Point': True}}, {'2.1.1.6': {'Data': {'CreatedTime': '2019-10-03 07:22:39'}, 'Point': True}, 'Id': 'AKIA4LMVGPP7RKB6XP7Y', '2.1.1.5': {'Data': {'LastAccessTime': '2019-11-05 16:30:00'}, 'Point': True}}, {'2.1.1.6': {'Data': {'CreatedTime': '2019-10-01 18:48:10'}, 'Point': True}, 'Id': 'AKIA4LMVGPP7Y2MXIRP3', '2.1.1.5': {'Data': {'LastAccessTime': ''}, 'Point': False}}, {'2.1.1.6': {'Data': {'CreatedTime': '2019-10-01 18:39:45'}, 'Point': True}, 'Id': 'AKIA4LMVGPP74GFWZBOO', '2.1.1.5': {'Data': {'LastAccessTime': '2019-10-01 20:00:00'}, 'Point': True}}, {'FulluserList': ['nevation_aws', 'nevation_terraform', 'terraform']}, {'mfaUserNameList': ['nevation_terraform']}, {'noUseGroupUserList': ['nevation_terraform']}, {'usingAdminAuthUserList': ['terraform', 'nevation_aws']}]], 'Database': [{'1.1.1.5': {'Data': [{'IPAddr': '*', 'Port': 3306, 'InDescription': '', 'Protocol': 'tcp'}, {'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'ID': 'database-server'}, {'1.1.1.5': {'Data': [{'IPAddr': '*', 'Port': '', 'InDescription': '', 'Protocol': '-1'}, {'IPAddr': '*', 'Port': '', 'OutDescription': '', 'Protocol': '-1'}], 'Point': False}, 'ID': 'terraform-20191001195726502900000001'}]}";

user_checklist = user_checklist
  .replace(/'/gi, '"')
  .replace(/true/gi, "true")
  .replace(/false/gi, "false")
  .replace(/id/gi, "id")
  .replace(/point/gi, "point");
user_checklist = JSON.parse(user_checklist);

function make_card(id, type, description, security_grade) {
  let card_div = document.createElement("div");
  let card_header = document.createElement("div");
  let card_body = document.createElement("div");
  let card_title = document.createElement("h5");
  let card_text = document.createElement("p");
  let card_footer = document.createElement("div");
  let i_fas = document.createElement("i");
  const grade = document.createTextNode(security_grade);

  card_div.id = id;
  card_header.id = `${id}-header`;
  card_body.id = `${id}-body`;
  card_title.id = `${id}-title`;
  card_text.id = `${id}-text`;
  card_footer.id = `${id}-footer`;

  card_div.className = "card mb-5";
  card_header.className = "card-header text-center";
  card_body.className = "card-body";
  card_title.className = "card-title";
  card_text.className = "card-text";
  card_footer.className = "card-footer text-muted";
  i_fas.className = "fas";

  card_text.innerText = description;

  if (security_grade === "not scored") {
    i_fas.classList.add("fa-info-circle");
  } else if (security_grade === "warning") {
    i_fas.classList.add("fa-exclamtion-triangle");
    card_div.classList.add("border-warning");
    card_header.classList.add("text-warning");
  } else if (security_grade === "critical") {
    i_fas.classList.add("fa-times-circle");
    card_div.classList.add("border-danger");
    card_header.classList.add("text-danger");
  }

  card_header.appendChild(i_fas);
  card_header.appendChild(grade);

  card_title.innerText = `${type} - ${id}`;

  card_body.appendChild(card_title);
  card_body.appendChild(card_text);

  card_footer.innerText = `Affected Instances : `;

  card_div.appendChild(card_header);
  card_div.appendChild(card_body);
  card_div.appendChild(card_footer);

  document.getElementById(type).appendChild(card_div);
}

function checklist_toggle() {
  const button = document.getElementById("toggle_button");
  if (button.classList.contains("active") != true) {
    const checklist_keys = Object.keys(checklist);
    for (type of checklist_keys) {
      const checklist_item = Object.keys(checklist[type]);
      for (ci of checklist_item) {
        if (checklist[type][ci].point !== true)
          document.getElementById(ci).style.display = "none";
      }
    }
  } else {
    const checklist_keys = Object.keys(checklist);
    for (type of checklist_keys) {
      const checklist_item = Object.keys(checklist[type]);
      for (ci of checklist_item) {
        document.getElementById(ci).style.display = "block";
      }
    }
  }
}

function get_total() {
  let safe_counter = 0;
  let critical_counter = 0;
  let warning_counter = 0;

  for (part in checklist) {
    for (check in checklist[part]) {
      if (checklist[part][check].hasOwnProperty("point")) {
        if (checklist[part][check].point === true) {
          security_grade = checklist[part][check].security_grade;
          switch (security_grade) {
            case "critical":
              critical_counter += 1;
              break;
            case "warning":
              warning_counter += 1;
              break;
            case "not scored":
              break;
            default:
              safe_counter += 1;
          }
        }
      } else {
        safe_counter += 1;
      }
    }
  }

  document.getElementById("safe-counter").innerText = safe_counter;
  document.getElementById("critical-counter").innerText = critical_counter;
  document.getElementById("warning-counter").innerText = warning_counter;
}

function init() {
  const checklist_keys = Object.keys(checklist);
  //console.log(checklist_keys);
  for (let i = 0; i < checklist_keys.length; i++) {
    let checklist_values = Object.keys(checklist[checklist_keys[i]]);
    for (let j = 0; j < checklist_values.length; j++) {
      let checklist_element = checklist[checklist_keys[i]][checklist_values[j]];
      //console.log(checklist_element);
      make_card(
        checklist_values[j],
        checklist_keys[i],
        checklist_element.description,
        checklist_element.security_grade
      );
    }
  }

  const user_checklist_keys = Object.keys(user_checklist);

  for (service of user_checklist_keys) {
    console.log(service);
    for (product of user_checklist[service]) {
      if (product.hasOwnProperty("id")) {
        id = product.id;
      }
      const product_checklist = Object.keys(product);
      for (cl of product_checklist) {
        // ex) cl = "1.1.1.1"
        if (product[cl].hasOwnProperty("point")) {
          if (product[cl].point === true) {
            footer = document.getElementById(`${cl}-footer`);
            console.log(footer);
            footer.textContent += `${id}\u00A0`;
            checklist[service][cl].point = true;
          }
        }
      }
    }
  }

  get_total();
}

document.addEventListener("DOMContentLoaded", init, false);
